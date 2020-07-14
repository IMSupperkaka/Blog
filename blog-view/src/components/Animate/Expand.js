import Animate from 'rc-animate';
import TWEEN, { Tween } from 'tween';

animate();
function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
}

const changeNodeStyle = (options, node, done) => {
    const { start, end, time } = options;
    let coords = start;
    const tween = new Tween(coords);
    tween.to(end, time).easing(TWEEN.Easing.Cubic.InOut).onUpdate((a) => {
        node.style.height = coords.height + 'px';
        node.style.opacity = coords.opacity;
        node.style.marginTop = coords.marginTop + 'px';
        node.style.marginBottom = coords.marginBottom + 'px';
    }).start().onComplete(done);
}

const animationOption = {
    enter: function (node, done) {
        const height = node?.clientHeight;
        node.style.height = 0;
        changeNodeStyle({
            start: { height: 0, opacity: 0, marginTop: 0, marginBottom: 0 },
            end: { height: height + 15, opacity: 1, marginTop: 15, marginBottom: 15 },
            time: 300
        }, node, done)
    },
    leave: function (node, done) {
        const height = node?.clientHeight;
        changeNodeStyle({
            start: { height: height, opacity: 1, marginTop: 15, marginBottom: 15 },
            end: { height: 0, opacity: 0, marginTop: 0, marginBottom: 0 },
            time: 300
        }, node, done)
    }
}

const Expand = (props) => {
    return (
        <Animate animation={animationOption}>
            {props.children}
        </Animate>
    )
}

export default Expand;