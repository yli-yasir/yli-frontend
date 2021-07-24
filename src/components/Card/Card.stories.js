import Card from './index';

export default {
    component: Card,
    title: 'Components/Card',
};

const Template = (args) => <Card {...args}/>;

export const Main = Template.bind({});

Main.args = {
    title: "timetable-assistant",
    description:"This is a program built with java",
    topics: ["Java","JavaFx","MVC"],
    date: "2004-4-4"
}

export const Overflow = Template.bind({});

Overflow.args = {
    title: "A-very-long-but-exciting-title-thats-amazing",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Posuere lorem ipsum dolor sit amet consectetur adipiscing. In eu mi bibendum neque egestas congue quisque egestas. Ut ornare lectus sit amet est placerat in. Est velit egestas dui id ornare arcu odio. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Sit amet justo donec enim diam vulputate ut pharetra. Lectus arcu bibendum at varius vel pharetra vel turpis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Volutpat lacus laoreet non curabitur gravida arcu ac. Enim tortor at auctor urna nunc. Sociis natoque penatibus et magnis dis parturient montes nascetur. Diam volutpat commodo sed egestas egestas fringilla.",
    topics: ["Java","JavaFx","MVC","Java","JavaFx","MVC","Java","JavaFx","MVC","Java","JavaFx","MVC"],
    date: "2004-4-4"
}