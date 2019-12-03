##proxy相对于defineproperty的优势
1.在数据劫持这个问题上，proxy可以认为是defineproperty的升级版
。外界对于某个该对象的访问，都必须要经过这层拦截。因此，他是针对整个对象而不是对象的某个属性，所以也就不需要对key进行遍历。
2.支持数组 proxy不需要对数组的方法进行重载  Proxy 的第二个参数可以有 13 种拦截方法，这比起 Object.defineProperty() 要更加丰富
                           
Proxy 作为新标准受到浏览器厂商的重点关注和性能优化，相比之下 Object.defineProperty() 是一个已有的老方法。