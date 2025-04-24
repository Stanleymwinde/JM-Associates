import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../functions/axios";

// Define the structure of the company history data
export type TimelineItem = {
  year: string;
  event: string;
};

export type CompanyHistoryData = {
  title: string;
  description: string;
  image: {
    path: string;
  };
  timeline: TimelineItem[];
};

// Define the response from the CMS API
type DefaultSectionResponse = {
  entries: CompanyHistoryData[];
};

export const useDefaultSectionData = (endpoint: string) => {
  const [sectionData, setSectionData] = useState<CompanyHistoryData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchSectionData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch data based on the endpoint passed to the hook
      const { data } = await axiosInstance.get<DefaultSectionResponse>(
        `https://cms.jmassociates.co.ke/api/collections/get/${endpoint}`
      );
      setSectionData(data.entries[0]); // Assuming we're using the first entry
    } catch (axiosError: unknown) {
      const message =
        axiosError instanceof Error
          ? axiosError.message
          : "An unknown error occurred";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchSectionData();
  }, [fetchSectionData]);

  return { sectionData, error, loading };
};

