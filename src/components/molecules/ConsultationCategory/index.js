import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ILCatKeluarga,
  ILCatKitabSuci,
  ILCatPerkawinan,
  ILCatIman,
} from '../../../assets';
import {fonts, colors} from '../../../utils';

const ConsultationCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'kitab suci') {
      return <ILCatKitabSuci style={styles.illustration} />;
    }
    if (category === 'keluarga') {
      return <ILCatKeluarga style={styles.illustration} />;
    }
    if (category === 'perkawinan') {
      return <ILCatPerkawinan style={styles.illustration} />;
    }
    if (category === 'iman') {
      return <ILCatIman style={styles.illustration} />;
    }
    return <ILCatKitabSuci style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Konsultasi</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default ConsultationCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: 100,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
  },
  illustration: {marginBottom: 30},
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  category: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
});
