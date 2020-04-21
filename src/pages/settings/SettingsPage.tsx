/**
 * @component
 *
 * This component displays the Settings page route
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import NationalitiesSelector from './NationalitiesSelector';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { nationalitiesSelector, getSelectedNationalities } from '../../slices/settingsSlice';
import { Nationality } from '../../models/Nationality';
import { resetContactsList, fetchContacts } from '../../slices/contactsSlice';
import { screenSize } from '../../constants/screenSizes';

/**
 * Styled Components
 *
 * See https://styled-components.com/
 */
const SettingsInfoText = styled.p`
  display: flex;
`;

const SettingsSavedMessage = styled.span`
  margin-top: 10px;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 40px 0 0 10px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: 50px;

  & button {
    flex: 1;
  }

  @media (min-width: ${screenSize.medium}) {
    max-width: 120px;
  }
`;

const SettingsPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const defaultNationalities = useSelector(nationalitiesSelector);
  const [nationalities, setNationalities] = useState<Nationality[]>(defaultNationalities);
  const [showSettingsSavedMessage, setShowSettingsSavedMessage] = useState<boolean>(false);

  const saveSettings = () => {
    // Dispatch an action to update the nationalities in the redux store
    dispatch(getSelectedNationalities(nationalities));

    // Reset the contacts list and fetch new ones now that the nationalities have been updated
    dispatch(resetContactsList());
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
      <SettingsInfoText>Select nationalities to be included in your address book:</SettingsInfoText>
      <NationalitiesSelector nationalities={nationalities} onNationalitiesChanged={onNationalitiesChanged} />
      <Footer>
        <Button onClick={saveSettings} size={40}>
          Save
        </Button>
      </Footer>
      {showSettingsSavedMessage && <SettingsSavedMessage>{'Settings saved! 👌'}</SettingsSavedMessage>}
    </Page>
  );
};

export default SettingsPage;
