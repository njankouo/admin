import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'ngx-tab1',
  template: `
    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered
      <a target="_blank" href="https://en.wikipedia.org/wiki/Home_appliances">home appliances</a>
      became viable in the 1900s with the introduction of
      <a target="_blank" href="https://en.wikipedia.org/wiki/Electric_power_distribution">electric power distribution
      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,
      dishwashers, and clothes dryers.
    </p>
  `,
})
export class Tab1Component{}
@Component({

  selector: 'ngx-tab2',
  template: `
    <p>Tab 2 works!</p>
  `,
})
export class Tab2Component { }

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit{
title = 'Angular avec JQuery';
 
public liste:any[]=[
{
store:1,
order_number:"alibaba",
order_date:"24-05-2021",
customer:"alert",
order_amount:"clear",
agent:"conseiller d'orientation"
},
{
store:2,
order_number:"owona",
order_date:"23-04-2021",
customer:"admin",
order_amount:"clear",
agent:"conser"
},
{
store:3,
order_number:"slem",
order_date:"23-08-2021",
customer:"alert",
order_amount:"clear",
agent:"conseiller"
},
{
store:4,
order_number:"gregoire",
order_date:"23-05-2021",
customer:"alert",
order_amount:"clear",
agent:"conseiller"
},
] 
  ngOnInit(){
   $(function () {
            // Header Master Checkbox Event
            $("#masterCheck").on("click", function () {
                if ($("input:checkbox").prop("checked")) {
                    $("input:checkbox[name='row-check']").prop("checked", true);
                } else {
                    $("input:checkbox[name='row-check']").prop("checked", false);
                }
            });

            // Check event on each table row checkbox
            $("input:checkbox[name='row-check']").on("change", function () {
                var total_check_boxes = $("input:checkbox[name='row-check']").length;
                var total_checked_boxes = $("input:checkbox[name='row-check']:checked").length;

                // If all checked manually then check master checkbox
                if (total_check_boxes === total_checked_boxes) {
                    $("#masterCheck").prop("checked", true);
                }
                else {
                    $("#masterCheck").prop("checked", false);
                }
            });
        });
  
  }
  

}

