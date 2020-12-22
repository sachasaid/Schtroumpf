import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFriend, Friend } from './friends.models';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = '/api/friends';

    constructor(private http: HttpClient) { }

    get(): Promise<Array<IFriend>> {
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    create(product: Friend): Promise<IFriend> {
        return this.http.post(this.productsUrl, product)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    delete(id: string): Promise<any> {
        return this.http.delete(`${this.productsUrl}/${id}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Error handling
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}