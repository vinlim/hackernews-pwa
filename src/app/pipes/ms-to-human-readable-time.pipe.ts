import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'msToHumanReadableTime'
})
export class MsToHumanReadableTimePipe implements PipeTransform {

    transform(value: number): string {
        let temp = Math.floor(value / 1000);
        const years = Math.floor(temp / 31536000);
        if (years) {
            return years + ' year' + this.numberEnding(years);
        }
        const days = Math.floor((temp %= 31536000) / 86400);
        if (days) {
            return days + ' day' + this.numberEnding(days);
        }
        const hours = Math.floor((temp %= 86400) / 3600);
        if (hours) {
            return hours + ' hour' + this.numberEnding(hours);
        }
        const minutes = Math.floor((temp %= 3600) / 60);
        if (minutes) {
            return minutes + ' minute' + this.numberEnding(minutes);
        }
        const seconds = temp % 60;
        if (seconds) {
            return seconds + ' second' + this.numberEnding(seconds);
        }
        return 'just now';
    }

    private numberEnding(value: number) {
        return (value > 1) ? 's' : '';
    }

}
