import React from 'react';
import { motion } from 'framer-motion';
import { Table, Loader2, AlertCircle } from 'lucide-react';
import { useAirtable } from '../hooks/useAirtable';

export const AirTable2: React.FC = () => {
  const { records, isLoading, error } = useAirtable();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block p-4 bg-white/10 rounded-full mb-6"
          >
            <Table className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            AirTable 2
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg mb-12"
          >
            Read-only view of BwTown Data
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
        >
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
              <span className="ml-3 text-white">Loading data...</span>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12 text-red-400">
              <AlertCircle className="w-6 h-6 mr-2" />
              <span>{error}</span>
            </div>
          ) : records.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              No records found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    {records[0] && Object.keys(records[0].fields).map(header => (
                      <th key={header} className="px-6 py-4 text-sm font-semibold text-white">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr 
                      key={record.id}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      {Object.values(record.fields).map((value, i) => (
                        <td key={i} className="px-6 py-4 text-sm text-gray-300">
                          {value as string}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};