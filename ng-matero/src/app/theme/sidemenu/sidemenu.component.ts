import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '@core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidemenuComponent implements OnInit {
  // Note: Ripple effect make page flashing on mobile
  @Input() ripple = false;

  menu$ = this.menu.getAll();

  buildRoute = this.menu.buildRoute;
  // menuSubscription: any;
  // menuList: Menu[] = [];
  constructor(private menu: MenuService) {}
  ngOnInit() {
    // console.log('menu11', this.menu$);
    // console.log('sidemenu', this.menu.getAll().pipe(
    //   map(res => res.re)
    // ));
    // this.menuSubscription = this.menu$.pipe(
    //   map(res => {
    //     console.log('map', res);
    //   })
    // );
    // console.log(
    //   this.menu$.subscribe({
    //     next: res => {
    //       console.log('res', res);
    //     },
    //   })
    // );
  }
}
