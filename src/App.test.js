import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
  // 总体而言，render用于渲染组件，而screen提供了一组方便的查询方法，使得在测试中能够轻松地获取和断言组件的DOM元素。这两者的结合使得测试代码更加清晰、简洁。
  // throw 'errrrrrr'
});


// test("renders MyComponent", () => {
//   const { getByText } = render(<MyComponent />);
//   const element = getByText("Hello, World!");
//   expect(element).toBeInTheDocument();
// });
// 在上述示例中，render函数渲染了MyComponent，并返回一个包含了getByText等查询方法的对象。

// 示例中，直接使用screen对象来执行getByText查询，而不需要先解构render返回的对象。

