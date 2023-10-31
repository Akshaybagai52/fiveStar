import {View, Text} from 'react-native';
import React from 'react';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import {Field} from 'formik';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import commonStyles from '../../../styles/commonStyles';

const RadioAudio = ({combinedData}: any) => {
  return (
    <View>
      {combinedData?.map((data: any, index: number) => {
        return (
          <View key={index} style={[commonStyles.mTop15]}>
            <Text style={[commonStyles.text16, commonStyles.fontBold]}>
              {data?.heading}{' '}
            </Text>
            <RadioGroupButton options={data?.radioData} />
            <Text style={[commonStyles.text16, commonStyles.fontBold]}>
              {data.audioFieldHeading}{' '}
              {data.showAudioFieldAsterisk && (
                <Text style={[commonStyles.errorText]}>*</Text>
              )}
            </Text>
            <Field name={data?.audioFieldName} component={AudioConverter} />
          </View>
        );
      })}
    </View>
  );
};

export default RadioAudio;
