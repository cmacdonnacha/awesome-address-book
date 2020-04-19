import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { getSelectedNationalities, Nationality, nationalitiesSelector } from '../../slices/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { resetContactsList } from '../../slices/contactsSlice';

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
`;

const NationalitiesSelector: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const nationalities = useSelector(nationalitiesSelector);
  const [availableNationalities, setAvailableNationalities] = useState<Nationality[]>(nationalities);
  const [showSettingsSavedMessage, setShowSettingsSavedMessage] = useState<boolean>(false);

  const onNationalityClicked = (selectedNationality: Nationality) => {
    // Make a copy of the nationalities array so we don't mutate this component's state directly
    const newNationalities = availableNationalities.map((nationality) => {
      // If this nationality code doesn't match then ignore it
      if (nationality.code !== selectedNationality.code) {
        return nationality;
      }

      // Otherwise update the checkbox
      return { ...nationality, isSelected: !selectedNationality.isSelected };
    });

    // Update this component's local state
    setAvailableNationalities([...newNationalities]);

    // Dispatch an action to update the global state
    dispatch(getSelectedNationalities(newNationalities));

    // Reset the contacts list now that we have new nationalities
    dispatch(resetContactsList());

    // Show "Settings Saved" message and hide it 2 seconds later to give the user instant feedback
    setShowSettingsSavedMessage(true);
    setTimeout(() => setShowSettingsSavedMessage(false), 2000);
  };

  return (
    <Container>
      <ul>
        {availableNationalities.map((nationality: Nationality) => {
          return (
            <li key={nationality.code}>
              <label>
                {nationality.label}
                <input type="checkbox" checked={nationality.isSelected} onChange={() => onNationalityClicked(nationality)}></input>
              </label>
            </li>
          );
        })}
      </ul>

      {showSettingsSavedMessage && <span>{'Settings saved! 👌'}</span>}
    </Container>
  );
};

export default NationalitiesSelector;
