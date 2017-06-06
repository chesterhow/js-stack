// @flow

// Declaring the 'hot.accept' function in the global variable 'module'
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void;
  };
}
