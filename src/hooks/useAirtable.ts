import { useState, useEffect } from 'react';
import Airtable from 'airtable';

interface AirtableRecord {
  id: string;
  fields: Record<string, unknown>;
  createdTime: string;
}

interface AirtableResponse {
  records: AirtableRecord[];
  isLoading: boolean;
  error: string | null;
}

export const useAirtable = (): AirtableResponse => {
  const [records, setRecords] = useState<AirtableRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        // Configure Airtable base with new API token
        const base = new Airtable({
          apiKey: 'patKFTnu65twQBcrV.dbee738325cd902ff3bd44af5554b4ad77004b2aafc2178497bc186960cab57c',
          endpointUrl: 'https://api.airtable.com'
        }).base('appbmnNrygUENWOCd');

        // Fetch records
        const fetchedRecords = await base('BwTownData')
          .select({
            maxRecords: 100,
            view: 'Grid view'
          })
          .all();

        setRecords(fetchedRecords);
        setError(null);
      } catch (err) {
        console.error('Airtable fetch error:', err);
        setError('Failed to fetch data from Airtable');
        setRecords([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecords();
  }, []);

  return { records, isLoading, error };
};