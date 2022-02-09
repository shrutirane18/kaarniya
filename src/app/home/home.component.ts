import { Component,  HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private as: AuthService) { 
   
  }

  user: any = null;

  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      this.user = res;
    });
  }
  // (function ($) {
  //   "use strict";
  
  //   // Mobile Navigation
  //   if ($('.main-nav').length) {
  //     var $mobile_nav = $('.main-nav').clone().prop({
  //       class: 'mobile-nav d-lg-none'
  //     });
  //     $('body').append($mobile_nav);
  //     $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
  //     $('body').append('<div class="mobile-nav-overly"></div>');
  
  //     $(document).on('click', '.mobile-nav-toggle', function(e) {
  //       $('body').toggleClass('mobile-nav-active');
  //       $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //       $('.mobile-nav-overly').toggle();
  //     });
      
  //     $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
  //       e.preventDefault();
  //       $(this).next().slideToggle(300);
  //       $(this).parent().toggleClass('active');
  //     });
  
  //     $(document).click(function(e) {
  //       var container = $(".mobile-nav, .mobile-nav-toggle");
  //       if (!container.is(e.target) && container.has(e.target).length === 0) {
  //         if ($('body').hasClass('mobile-nav-active')) {
  //           $('body').removeClass('mobile-nav-active');
  //           $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //           $('.mobile-nav-overly').fadeOut();
  //         }
  //       }
  //     });
  //   } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
  //     $(".mobile-nav, .mobile-nav-toggle").hide();
  //   }
  
  // })(jQuery);
   
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let nav = <HTMLElement>document.getElementsByClassName("header")[0];
    // console.log(nav)
    // let nav2 = <HTMLElement>document.getElementsByClassName("container")[0];
    nav.style.backgroundColor = `rgba(255, 255, 255, ${window.pageYOffset / 100})`
    // nav.style.color = `rgb(${255 - (window.pageYOffset)}, ${255 - (window.pageYOffset)}, ${255 - (window.pageYOffset)})`
  }

  goTo(section: string){
    document.getElementById(section)?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  goToPage(page: string){
    this.router.navigate(['/' + page])
  }

  logout(){
    this.as.logout();
  }

}
