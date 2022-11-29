import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-page-not-found',
    template: `
    <div>
        <h1>Page introuvable</h1>
        <a routerLink="/"> Retour </a>
</div>
    `,
    styles: [

    ]
})

export class PageNotFoundCommponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }
}