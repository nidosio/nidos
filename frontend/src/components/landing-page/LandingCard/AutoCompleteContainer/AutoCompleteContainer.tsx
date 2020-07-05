import React, { FC } from 'react';
import AutoCompleteInput, { AutoCompleteSuggestion } from 'components/ui/AutoCompleteInput/AutoCompleteInput';

const AutoCompleteContainer: FC = () => {
  const suggestions: AutoCompleteSuggestion[] = [
    { id: 'theme1', label: 'label 1 😊' },
    { id: 'theme2', label: 'label 2 😊' },
    { id: 'theme3', label: 'label 3 😊' },
    { id: 'theme4', label: 'label 4 😊' },
  ];

  return (
    <AutoCompleteInput
      id="landing-card-auto-complete"
      suggestions={suggestions}
      onSelect={(selected) => console.log(`selected : ${selected}`)}
      onChange={(change) => console.log(`change: ${change}`)}
      label=""
    />
  );
};

export default AutoCompleteContainer;
