import { MsToHumanReadableTimePipe } from './ms-to-human-readable-time.pipe';

describe('MsToHumanReadableTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MsToHumanReadableTimePipe();
    expect(pipe).toBeTruthy();
  });
});
