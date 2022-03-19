export default jest.mock('hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: jest.fn(),
    }),
  };
});
