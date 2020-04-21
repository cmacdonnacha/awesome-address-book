/**
 * @component
 *
 * This component allows the user to select which nationalities to fetch when loading contacts.
 *
 * @param {Nationality[]} nationalities Array of available nationalities the user can choose from.
 * @param {callback} onNationalitiesChanged Fires when a nationality has been checked/unchecked.
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Nationality } from '../../models/Nationality';

interface Props {
  nationalities: Nationality[];
  onNationalitiesChanged: (nationalities: Nationality[]) => void;
}

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
`;

const List = styled.ul`
  margin-top: 20px;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;

const Label = styled.label`
  margin-left: 10px;
`;

const NationalitiesSelector: React.FunctionComponent<Props> = (props: Props) => {
  const onNationalityClicked = (selectedNationality: Nationality) => {
    // Make a copy of the nationalities array so we don't mutate props directly
    const newNationalities = props.nationalities.map((nationality) => {
      // If this nationality code doesn't match then ignore it
      if (nationality.code !== selectedNationality.code) {
        return nationality;
      }

      // Otherwise update the checkbox
      return { ...nationality, isSelected: !selectedNationality.isSelected };
    });

    // Let the parent know that the nationalities have been updated
    props.onNationalitiesChanged([...newNationalities]);
  };

  return (
    <Container>
      <List>
        {props.nationalities.map((nationality: Nationality) => {
          return (
            <ListItem key={nationality.code}>
              <input
                id={nationality.code}
                type="checkbox"
                checked={nationality.isSelected}
                onChange={() => onNationalityClicked(nationality)}
              ></input>
              <Label htmlFor={nationality.code}>{nationality.label}</Label>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default NationalitiesSelector;
