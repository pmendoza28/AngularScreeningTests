import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class TestService {

  /** @property action - this property is the endpoint api provided by the exam */
  action: string = '/Customer.action';

  constructor(
    private http: HttpClient
  ) { }

  /************************************* QUESTION NO 1 START **************************************************
   * @QUESTION_NO_1 - complete the TestService code to send a request to the backend and handle the response by storing
    the returned customerId in the component customerId property
   * @method callCustomerApi - this method is posting a customer data to the backend server 
   * and expecting a customerId property response
   * @param name - this property is . 
   * @param email - this customer parameter is consiting of name and email property. 
   */
  name: string | undefined;
  email: string | undefined;
  callCustomerApi(): Observable<{ customerId: number }> {
    return this.http.post<{ customerId: number }>(`${this.action}`, { name: this.name, email: this.email }).pipe(
      catchError(error => {
        return throwError(error)
      })
    )
  }
  /************************************* QUESTION NO 1 END ****************************************************** */


  /************************************* QUESTION NO 3 START****************************************************
   * @QUESTION_NO_3 - subscribing to the testResultsChanged Subject in the TestService and updating the testData variable in the TestComponent
   * @property testResultsChanged - this is a subject property that emitting multiple values to the observer
   * @method updateTestResults - this method emit new value to the @property testResultsChanged subject
   */
  testResultsChanged: Subject<string> = new Subject<string>()
  updateTestResults(results: string) {
    this.testResultsChanged.next(results)
  }
  /************************************* QUESTION NO 3 END ****************************************************** */
}