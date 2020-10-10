import notificationService from './notificationService';

describe('notificationService', () => {
  it('should return void for success function', () => {
    expect(notificationService.success({ description: '' })).toBeFalsy();
  });

  it('should return void for error function', () => {
    expect(notificationService.error({ description: '' })).toBeFalsy();
  });
});
