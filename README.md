<div align="center">
  <img src="demo.gif" alt="Logo" width="400">
  <br><br>
</div>
# react-circle
> Renders a svg circle + percentage. It just works

# Install 🚀

```
$ yarn add react-circle
```

# Usage ⛏

**Basic** 🙃

ReactCircle is opinionated and comes with default size and colors, just pass the **progress** prop to get them:

```javascript
import Circle from 'react-circle';

<Circle
  progress={35}
/>
```

**Custom** 💅

Optionally, you can pass the following props and customize it as your will

```javascript
import Circle from 'react-circle';

<Circle
  size={150}
  progress={69}
  progressColor="cornflowerblue"
  bgColor="whitesmoke"
  textColor="hotpink"
/>
```