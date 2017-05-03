## 遇见的bug
### 1 listview的head为swiper不显示。
	解决办法：直接this.props.images.map来设置对于的image
### 2 expected a compoent class, got [object,object]。
	解决办法：把标签写错了，比如把View 写成了 view 很难找到出来。