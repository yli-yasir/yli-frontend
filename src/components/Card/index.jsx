import styled from 'styled-components';
import PropTypes from 'prop-types';
import {css} from 'styled-components';

const borders = css`border: 2px solid ${({ theme }) => theme.mode === 'light' ? 'black' : 'white'};`

const StyledCard = styled.div`
${borders}
padding: 8px;
font-family: 'Press Start 2P', monospace;
`;

const Topic = styled.span`
${borders}
padding:4px;
margin:4px;
display: inline-block;
`;

const Date = styled.span`
display:block;
width:200px;
text-align: right;
margin-left: auto;
`;

function Card(props) {
    return <StyledCard className={props.className}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {props.topics?.map((topic) => <Topic>{topic}</Topic>)}
        <Date>{props.date}</Date>
    </StyledCard>
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string.isRequired,
};

export default Card;