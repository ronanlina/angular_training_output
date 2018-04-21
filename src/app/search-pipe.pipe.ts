import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})

export class SearchPipe implements PipeTransform {

  transform(list: any[], keyword: string ): any {
    
  if(!list){ 
      return [];
    }

  if(!keyword){
      return list;
    }

  keyword = keyword.toLowerCase();

  return list.filter(index=>{
    if( index.fname.toLowerCase().includes( keyword ) ){
      return true;
    }
  });
  }

}
