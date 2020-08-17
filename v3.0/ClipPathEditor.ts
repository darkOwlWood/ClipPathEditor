/**
 * TO THIS CODE WORKS_
 * -ALL THE DOTS HAS TO HAVE THE CLASS 'dot'.
 */

interface Coors{
    id: string,
    X:  number,
    Y:  number,
}

class ClipPathEditor {

    private DIVcurrentDot: HTMLElement = null;
    private DIVcanvas:     HTMLElement = null;
    private coorsList:     Coors[]     = [];
    private DIVfigure:     HTMLElement = null;
    private canIaddDots:   boolean     = false;
    private colorList:     string[]    = [];
    private canIdelDots:   boolean     = false;


    constructor(DIVcanvas: HTMLElement, DIVfigure:HTMLElement, colorList:string[] = ['#000']){
        this.DIVcanvas = DIVcanvas;
        this.DIVfigure = DIVfigure;
        this.colorList = colorList;
    }

    init(){
        this.moveCurrentDot    = this.moveCurrentDot.bind(this);
        this.setNullCurrentDot = this.setNullCurrentDot.bind(this);
        this.addDotToCanvas    = this.addDotToCanvas.bind(this);
        this.setCurrentDot     = this.setCurrentDot.bind(this);

        this.removeDotFromCanvas = this.removeDotFromCanvas.bind(this);

        this.addEventListeners();
    }

    private setCurrentDot({target}): void{ 
        this.DIVcurrentDot = target;
    }    

    private setNullCurrentDot(): void{
        this.DIVcurrentDot = null;
    }     

    private pixelsToPercentage(total:number, current:number): number{
        return (current * 100) / total;
    }

    private validationPercentage(coor: number): number{
        return coor = coor <= 0? 0 : coor >= 100? 100 : coor;
    }

    private getMouseCoorsInElement(element: HTMLElement, coor:any): any{
        return {
            X: coor.X - element.offsetLeft,
            Y: coor.Y - element.offsetTop,
        };
    }

    private getCoorsInPercentage(rawCoor:any): any{
        const coor:any = this.getMouseCoorsInElement(this.DIVcanvas, rawCoor);
        coor.X = this.validationPercentage(this.pixelsToPercentage(this.DIVcanvas.clientWidth,coor.X));
        coor.Y = this.validationPercentage(this.pixelsToPercentage(this.DIVcanvas.clientHeight,coor.Y));

        return coor;
    }

    private setSizeOfCross(element:HTMLElement, coor:any): void{
        element.style.width  = `${coor.X}%`;
        element.style.height = `${coor.Y}%`;
    }

    private moveCurrentDot(event): void{
        if(this.DIVcurrentDot){
            event.preventDefault();
            const {clientX: X, clientY: Y} = event;
            const coor:any = this.getCoorsInPercentage({X, Y});
            this.setSizeOfCross(this.DIVcurrentDot.parentElement, coor);
            this.updateDotList(this.DIVcurrentDot.dataset.dotId, coor);
            this.CropElement(this.DIVfigure, this.coorsList);
        }
    }

    private updateDotList(dotId:string, coor:any): void{
        const ndxDot:number = this.coorsList.findIndex( obj => obj.id === dotId);
        this.coorsList[ndxDot].X = coor.X;
        this.coorsList[ndxDot].Y = coor.Y;
    }
    
    private sortCoorList(): void{//<---Hacerla generaico o especifica?
        this.coorsList.sort( (objA,objB) => objA.id < objB.id? -1 : objA.id > objB.id? 1 : 0);
    }

    private CropElement(element:HTMLElement, coorsList:Coors[]): void{
        let clipPathPolygon = '';
        this.sortCoorList();

        coorsList.forEach(coor => clipPathPolygon += `${coor.X}% ${coor.Y}%,`);
        element.style.clipPath = `polygon( ${clipPathPolygon.slice(0,-1)} )`;
    }

    enableAddDots(): void{
        this.canIaddDots = !this.canIaddDots;
        this.canIaddDots? this.removeMouseDownEventDots() : this.addMouseDownEventDots(); 
    }
    
    private removeMouseDownEventDots(): void{
       const dotList: HTMLElement[] = Array.from(document.querySelectorAll('.dot') || []);
       dotList.forEach(element => element.removeEventListener('mousedown',this.setCurrentDot));
    }

    private addMouseDownEventDots(): void{
        const dotList: HTMLElement[] = Array.from(document.querySelectorAll('.dot') || []);
        dotList.forEach(element => element.addEventListener('mousedown',this.setCurrentDot));
     }

     private generateNewId(idList: string[]): string{
        let lastId = 'A1_1'; 
        
        if(idList.length){
            lastId = idList.sort().slice(-1)[0];
            let secondNumber = parseInt(lastId.slice(-1));
            let firstNumber  = parseInt(lastId[1]);
            let letter = lastId[0].charCodeAt(0);
            
            secondNumber = secondNumber === 9? 1 : ++secondNumber; 
            firstNumber  = firstNumber === 9? 1 : secondNumber === 1? ++firstNumber : firstNumber;
            letter = firstNumber === 1 && secondNumber === 1? ++letter : letter;
            
            lastId = `${String.fromCharCode(letter)}${firstNumber}_${secondNumber}`;
        }
        
        return lastId;
    }

    private addDotToCanvas({clientX: X, clientY: Y}){
        if(this.canIaddDots){

            const newCoorId:string  = this.generateNewId(this.coorsList.map(obj => obj.id));
            
            const coor   = this.insertDotToList(newCoorId, {X, Y});
            const newDot = this.appendDotToDOM(newCoorId);

            this.setSizeOfCross(newDot.parentElement, coor);
            this.CropElement(this.DIVfigure, this.coorsList);            
        }
    }

    private appendDotToDOM(dotId:string): HTMLElement{
        let DIVcross:HTMLElement = document.createElement('div');
        let DIVdot:HTMLElement   = document.createElement('div');
        
        DIVdot.classList.add('dot');
        DIVdot.style.backgroundColor = '#66BB6A';//<--No harcordear
        DIVdot.setAttribute('data-dot-id', dotId);
        DIVdot.innerHTML = `${this.coorsList.length}`;
        DIVcross.classList.add('cross');
        
        DIVcross.appendChild(DIVdot);
        this.DIVcanvas.appendChild(DIVcross);

        return DIVdot;
    }

    private insertDotToList(dotId:string, coor:any): void{
        coor = this.getCoorsInPercentage(coor);
        this.coorsList.push({
            id: dotId, 
            X:  coor.X, 
            Y:  coor.Y,
        });
        return coor;
    }

    private addEventListeners(): void{
        window.addEventListener('mousemove', this.moveCurrentDot);
        window.addEventListener('mouseup',   this.setNullCurrentDot);
        this.DIVcanvas.addEventListener('click', this.addDotToCanvas);
    }

    /** ----------------------- */
    // private removeDotFromCanvas({target}){
    //     console.log(target);
    //     console.log(this.canIdelDots);
    //     if(this.canIdelDots){
    //         let   dotIdList:string[] = [];
    //         const dotId:string = target.dataset.dotId;
    //         const ndxDeleteDot = this.coorsList.findIndex(obj => obj.id === dotId);
    //         const remainingDots = this.coorsList.length - (ndxDeleteDot+1);

    //         dotIdList.push(dotId);
    //         console.log('--->>',remainingDots)//<---
    //         new Array(remainingDots).fill(0).forEach( () => dotIdList.push(this.generateNewId(dotIdList)) );
    //         console.log('--->',dotIdList); //<---
    //         this.coorsList.forEach( item => console.log('---->>>',item) ); //<---
    //         this.coorsList.forEach( (obj,ndx) => ndx>ndxDeleteDot && (obj.id = dotIdList.shift()) );
    //         this.coorsList.splice(ndxDeleteDot,1);
    //         target.parentElement.parentElement.removeChild(target.parentElement);

    //         const elementList:HTMLElement[] = Array.from(document.querySelectorAll('.dot') || []);
    //         Array.prototype.forEach.call(elementList, (element,ndx) => element.innerHTML = `${ndx+1}`);

    //         this.coorsList.forEach( item => console.log(item) ); //<---

    //         this.CropElement(this.DIVfigure, this.coorsList);
    //     }
    // }

    private removeDotFromCanvas({target}){
        console.log(target);
        console.log(this.canIdelDots);
        if(this.canIdelDots){
            const dotId:string = target.dataset.dotId;
            const ndxDeleteDot = this.coorsList.findIndex(obj => obj.id === dotId);

            this.coorsList.splice(ndxDeleteDot,1);
            target.parentElement.parentElement.removeChild(target.parentElement);
            this.CropElement(this.DIVfigure, this.coorsList);

            this.coorsList.forEach( item => console.log(item) ); //<---
        }
    }

    reasingId():void {
        let dotIdList:string[] = [];
        const elementList:HTMLElement[] = Array.from(document.querySelectorAll('.dot') || []);

        new Array(elementList.length).fill(0).forEach( () => dotIdList.push(this.generateNewId(dotIdList)) );
        this.coorsList.forEach( (obj,ndx) => obj.id = `${dotIdList[ndx]}`);
        elementList.forEach( (element,ndx) => element.dataset.dotId = `${dotIdList[ndx]}`);
        elementList.forEach( (element,ndx) => element.innerHTML = `${ndx+1}`);
    }

    enableDelDots(): void{
        this.canIdelDots = !this.canIdelDots;
        this.canIdelDots? this.addMouseClickEventDots() : this.removeMouseClickEventDots(); 
    }

    private removeMouseClickEventDots(): void{
        const dotList: HTMLElement[] = Array.from(document.querySelectorAll('.dot') || []);
        dotList.forEach(element => element.removeEventListener('click',this.removeDotFromCanvas));
        this.addMouseDownEventDots();
        this.reasingId();
     }
 
     private addMouseClickEventDots(): void{
         const dotList: HTMLElement[] = Array.from(document.querySelectorAll('.dot') || []);
         dotList.forEach(element => element.addEventListener('click',this.removeDotFromCanvas));
         this.removeMouseDownEventDots();
      }
    /** ----------------------- */
}

export default ClipPathEditor;

//obtener id del boton-
//buscar su indice en la lista-
//saber cuantos botones le preceden-
//generar todas las llaves apartir del boton a aliminar-
//cambiar todas las llaves apartir del segundo boton a eliminar-
//sacar al boton en base a su ID-
//reasignar los numeros

//DAVID STAR
//polygon(0% 76.25%, 51.25% 0%, 83% 50.75%, 100% 24.5%, 0% 24%, 51.25% 100%, 83.25% 50.75%, 100% 77%)