import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: unknown): unknown {
    var result:string;
    switch (value){
      case 'new':{
        result = 'New';
        break;
      } 
      case 'inp':{
        result = "In Progress";
        break;
      }
      case 'pla':{
        result = "Planned";
        break;
      }
      case 'fin':{
        result = "Finished";
        break;
      }
    }
    return result;
  }

}
