import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  constructor() { }

  /************************************* QUESTION NO 2 START *************************************************
   * @QUESTION_NO_2 - by using an Event Emitter to pass the value stored in the data variable in the child component 
   * to the parent component when the @method buttonClicked is executed, 
   * and output this value in the @method onButtonClicked of the parent component
   * @method buttonClicked - this method will emit the data to the parent component
   * @property data - this property will be passed to the @component TestComponent or the Parent Component
   * @Output passDataToParent - this @Output property will be the event emitter to the parent*/
  @Output() passDataToParent: EventEmitter<any> = new EventEmitter();
  data: string = "some data";
  buttonClicked() {
    this.passDataToParent.emit(this.data)
  }
  /************************************* QUESTION NO 2 END ************************************************* */

    
  /************************************* QUESTION NO 5 START ***************************************************
   * @QUESTION_NO_5 - pass the value of testData in the Parent Component to the Child Component and logging it in ngOnInit
   * @Input parentData - this Input property is expecting data from the TestComponent
   */
   @Input() parentData: any
   /************************************* QUESTION NO 5 END *************************************************** */

   
  ngOnInit(): void {
    // logging it here said by the question no 5
    console.log(this.parentData)
  }
}
