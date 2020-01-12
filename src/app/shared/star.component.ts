import { Component, OnChanges,SimpleChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    
    @Input()
    rating:number;
    starWidth:number;
    @Output()
    ratingClicked:EventEmitter<string> =
    new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth=(this.rating*(75))/5;
    }

    onClicked():void{
        this.ratingClicked.emit(this.rating.toString());
    }
}