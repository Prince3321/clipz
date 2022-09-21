import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()
  constructor() { }
  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
    console.log("Tabs \t", this.tabs);
  }
  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false
    })
    tab.active = true
    return false // to stop the default behaviour in address bar
  }

  ngOnInit(): void {
    console.log("Tabs \t", this.tabs);
  }

}
