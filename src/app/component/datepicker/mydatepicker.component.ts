import { Component, ViewChild, Input, OnInit } from "@angular/core";
import { IgxDatePickerComponent, IgxSnackbarComponent } from "igniteui-angular";

@Component({
    selector: "ra-date-picker",
    styleUrls: ["./mydatepicker.component.scss"],
    templateUrl: "./mydatepicker.component.html"
})
export class MyDatePicker implements OnInit {

    @Input() inputDate: Date;
    public date1 = new Date();

    private dayFormatter = new Intl.DateTimeFormat("it", { weekday: "short" });
    private monthFormatter = new Intl.DateTimeFormat("it", { month: "short" });

    public formatter = (date: Date) => {
        return `${this.getFormattedDay(date)}/${this.getFormattedMonth(date)}/${date.getFullYear()}`;
    }

    constructor() { }

    public ngOnInit() {
        // setting to yesterday
        this.date1 = this.inputDate;
        this.date1.setDate(this.date1.getDate());
    }

    private getFormattedMonth(date: Date): string {
        const month = date.getMonth() + 1;
        return (month < 10 ? '0' + month : month + '');
    }

    private getFormattedDay(date: Date): string {
        const day = date.getDate();
        return (day < 10 ? '0' + day : day + '');
    }
}
