import React from 'react';
import styled from 'styled-components/macro';
import { Nationality } from 'models/Nationality';
import Checkbox from 'components/Checkbox';

interface Props {
  nationalities: Nationality[];
  onNationalitiesChanged: (nationalities: Nationality[]) => void;
}

const Container = styled.div`
  display: flex;
  background-color: white;
`;

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;

const NationalitiesSelector = ({ nationalities, onNationalitiesChanged }: Props) => {
  const onNationalityClicked = (selectedNationality: Nationality) => {
    // Make a copy of the nationalities array so we don't mutate props directly
    const newNationalities = nationalities.map((nationality) => {
      // If this nationality code doesn't match then ignore it
      if (nationality.code !== selectedNationality.code) {
        return nationality;
      }

      // Otherwise update the checkbox
      return { ...nationality, isSelected: !selectedNationality.isSelected };
    });

    // Let the parent know that the nationalities have been updated
    onNationalitiesChanged([...newNationalities]);
  };

  return (
    <Container>
      <List>
        {nationalities.map((nationality: Nationality) => {
          return (
            <ListItem key={nationality.code}>
              <Checkbox
                onClick={() => onNationalityClicked(nationality)}
                id={nationality.code}
                label={nationality.label}
                isChecked={nationality.isSelected}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default NationalitiesSelector;
