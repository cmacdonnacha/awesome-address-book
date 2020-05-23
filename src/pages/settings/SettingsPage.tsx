import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Page from 'components/Page';
import NationalitiesSelector from './NationalitiesSelector';
import Button from 'components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { nationalitiesSelector, selectedNationalitiesUpdated } from 'slices/settingsSlice';
import { Nationality } from 'models/Nationality';
import { contactsListCleared, fetchContacts } from 'slices/contactsSlice';
import { screenSize } from 'constants/screenSizes';

const SelectNationalitiesText = styled.h3`
  display: flex;
  margin-top: 40px;
`;

const SettingsSavedMessage = styled.span`
  display: flex;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 40px;

  /* Center on smaller screens */
  @media (max-width: ${screenSize.medium}) {
    justify-content: center;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: 50px;

  /* Button fills width on smaller screens */
  @media (max-width: ${screenSize.medium}) {
    & button {
      flex: 1;
    }
  }
`;

const SettingsPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const defaultNationalities = useSelector(nationalitiesSelector);
  const [nationalities, setNationalities] = useState<Nationality[]>(defaultNationalities);
  const [showSettingsSavedMessage, setShowSettingsSavedMessage] = useState<boolean>(false);

  const saveSettings = () => {
    // Dispatch an action to update the nationalities in the redux store
    dispatch(selectedNationalitiesUpdated(nationalities));

    // Clear the contacts list and fetch new ones now that the nationalities have been updated
    dispatch(contactsListCleared());
    dispatch(fetchContacts());

    // Show "Settings Saved" message
    setShowSettingsSavedMessage(true);
  };

  const onNationalitiesChanged = (updatedNationalities: Nationality[]) => {
    // Update local state
    setNationalities([...updatedNationalities]);
    setShowSettingsSavedMessage(false);
  };

  return (
    <Page heading="Settings">
      <SelectNationalitiesText>Select nationalities to be included in your address book:</SelectNationalitiesText>
      <NationalitiesSelector nationalities={nationalities} onNationalitiesChanged={onNationalitiesChanged} />
      <Footer>
        <Button onClick={saveSettings}>Save</Button>
      </Footer>
      {showSettingsSavedMessage && <SettingsSavedMessage>{'Settings saved! 👌'}</SettingsSavedMessage>}
    </Page>
  );
};

export default SettingsPage;
