import react from 'react';
import {InputGroup, Input, InputGroupAddon, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const SearchComponent = (props) => {
    return(
        <InputGroup>
            <Input placeholder="Filter to a location" />
            <InputGroupAddon addonType="append">
                <Button color="secondary"><FontAwesomeIcon icon={faLocationArrow} /></Button>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default SearchComponent;