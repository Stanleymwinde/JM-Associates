// utils/hooks/useCompanyHistoryData.ts

import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../functions/axios";

// Define the interface for your company history data
interface CompanyHistoryData {
  title: string;
  description: string;
  image: {
    path: string;
  };
}

export const useCompanyHistoryData = () => {
  const [companyHistory, setCompanyHistory] = useState<CompanyHistoryData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCompanyHistoryData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Use your confirmed API endpoint here
      const { data } = await axiosInstance.get<CompanyHistoryData>(
        "https://cms.jmassociates.co.ke/api/collections/get/companyhistory"
      );
      setCompanyHistory(data); // Set the data
    } catch (axiosError: unknown) {
      const message =
        axiosError instanceof Error
          ? axiosError.message
          : "An unknown error occurred";
      setError(message); // Set error
    } finally {
      setLoading(false); // Stop loading
    }
  }, []);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchCompanyHistoryData();
  }, [fetchCompanyHistoryData]);

  return { companyHistory, error, loading };
};

