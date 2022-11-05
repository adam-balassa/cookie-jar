import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  copyLink(compliment: string) {
    const invite = encodeURIComponent(btoa(compliment));
    navigator.clipboard.writeText(`https://endearing-medovik-cecd52.netlify.app?invite=${invite}`);
    this.router.navigateByUrl('/')
  }
}
