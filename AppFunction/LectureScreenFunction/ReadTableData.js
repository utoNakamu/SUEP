import AsyncStorage from '@react-native-async-storage/async-storage';

//データの読み出し
export async function readTableData(rd) {
  try {
    const gbi = await AsyncStorage.getItem(rd);
    if (gbi != null) {
      return gbi;
    } else {
      return null;
    }
  } catch (error) {
  }
}
