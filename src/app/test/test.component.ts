import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularResizeElementEvent } from 'angular-resize-element';
import { SubSink } from 'subsink';
import { TestService } from './test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private testService: TestService,
  ) { }

  /** @property subs - this is a 3rd party package, is a dead simple class to absorb RxJS subscriptions in an array.
   * Calling unsubscribe() to unsubscribe all of them, as we would do in our component library's unmount/onDestroy lifecycle event.  */
  subs = new SubSink()

  /********************************** QUESTION NO 1 START ****************************************
 * @QUESTION_NO_1 - this is the continuation of the question no 1, this parent component will subscribe to the callCustomerApi in the TestService
 * @property customerId - this property will be the storage for the callCustomerApi success response
 * @method PostingCustomerApi - this method is subscribing to the callCustomerApi method and storing the response success value to the @property customerId
 */
  customerId: number | undefined
  PostingCustomerApi() {
    this.subs.add(
      this.testService.callCustomerApi().subscribe({
        next: (response) => this.customerId = response.customerId,
        error: (err) => console.error(err)
      })
    )
  }
  /*********************************** QUESTION NO 1 END **************************************** */


  /************************************* QUESTION NO 2 START ****************************************
   * @QUESTION_NO_2 - this is the continuation of the question no 2, this is the parent component and receiving @Output data from the TestChildComponent
   * @method onButtonClicked - this method is returning the value emitted from the child component @TestChildComponent
   * @param newChildData 
   * @returns 
   */

  onButtonClicked(childData: string) {
    return childData;
  }
  /************************************* QUESTION NO 2 END **************************************** */


  /************************************* QUESTION NO 3 START ****************************************
   * @QUESTION_NO_3 - this is the continuation of the question no 3, this component will subscribe to the Subject property testResultsChanged
   * in the TestService and storing the response value to the @property testData
   * @property testData - this property will be the storage of the @method updateLocalData success response
   * @method updateLocalData - this method is subscribing to the subject that declared in the TestService
   */
  testData: string | undefined;
  updateLocalData() {
    this.testService.testResultsChanged.subscribe(response => this.testData = response)
  }
  /************************************* QUESTION NO 3 END **************************************** */
  ngOnInit(): void {
    this.testData = "Some Data"
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  /************************************* QUESTION NO 4 START ****************************************
   * @QUESTION_NO_4 - getting the width of the .my-element element in the HTML and storing this value in the elementWidth property
   * @property elementWidth - this property will be storage of the elementWidth Value
   */
  elementWidth: number | null = null;
  onResize(): void {
    this.elementWidth = this.myElementDiv!.nativeElement.offsetWidth
   
  }
  /************************************* QUESTION NO 4 END **************************************** */

  /************************************* QUESTION NO 6 START ************************************
   * @QUESTION_NO_6 - remove the class my-element from the div element in the HTML when the button is clicked
   * @ViewChild myElementDiv - this property is the div reference that we removing the class name
   * @method removeMyElementClass - this method will remove the target div container class
   */
  @ViewChild("myElementDiv") myElementDiv: ElementRef | undefined
  removeMyElementClass() {
    this.myElementDiv?.nativeElement.classList.remove('my-element')
  }
  /************************************* QUESTION NO 6 END **************************************** */
}
