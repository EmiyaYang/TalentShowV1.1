import React from "react";

export default class Comp extends React.Component {
  constructor(props) {
    super(props);

    // 初始化时不能用 setState 方法
    this.state = {
      count: 1,
    };
  }

  // 静态生命周期方法, 挂载更新时均触发
  // 根据 props 返回一个对象用于改变 state, 默认返回 null
  static getDerivedStateFromProps(props, state) {
    return null;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // 返回 snapShot || null
  //   return null;
  // }

  render() {
    return (
      <section>
        <span>{this.state.count}</span>
        <span>shouldComponentUpdate</span>
      </section>
    );
  }
}
