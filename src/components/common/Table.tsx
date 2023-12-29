import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../colors/colors';
import UnorderedList from './UnorderedList';

interface TableProps {
  columns: string[];
  data: any[]; // Assuming an array of objects
  isList: boolean;
}

const Table: React.FC<TableProps> = ({columns, data, isList}) => {
  return (
    <View style={styles.table}>
      {/* Table Heading */}
      <View style={[styles.row, styles.headerRow]}>
        {columns.map((column, index) => (
          <View key={index} style={styles.cell}>
            <Text style={styles.headerText}>{column}</Text>
          </View>
        ))}
      </View>

      {/* Table Data */}
      {data.map((rowData, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {columns.map((column, columnIndex) => (
            <View key={columnIndex} style={styles.cell}>
              {/* Conditionally render text or unordered list based on the column name */}
              {isList ? (
                typeof rowData[column.toLowerCase()] === 'string' ? (
                  <Text>{rowData[column.toLowerCase()]}</Text>
                ) : (
                  <UnorderedList items={rowData[column.toLowerCase()]} />
                )
              ) : (
                <Text>{rowData[column.toLowerCase()]}</Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    // borderWidth: 1,
    borderColor: '#000',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
  },
  headerRow: {
    backgroundColor: colors.darkBlue, // Background color for the header
    // borderBottomColor: '#000',
    // borderRightColor: '#000',
  },
  headerText: {
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default Table;
