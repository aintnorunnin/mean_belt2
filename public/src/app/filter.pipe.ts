import { Pipe, PipeTransform } from '@angular/core';
import { Bid } from './bid'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(bids: Array<Bid>, search: string): Array<Bid> {

      if(!search){ return bids }

      search = search.toLowerCase()

      return bids.filter(bids => bids.bidder.toLowerCase().includes(search)) 
  }

}
