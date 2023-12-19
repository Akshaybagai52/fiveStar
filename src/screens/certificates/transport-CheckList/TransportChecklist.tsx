import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Address from '../../../components/common/Address';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
// import { erectionRadioData } from '../../../data/handoverData';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import {
  transPortHeading,
  transPortHeading1,
} from '../../../data/TransportChecklist';
import {Formik} from 'formik';
import {initialFormData, initialValues} from '../../../data/siteAudit';
export const TransportChecklist = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Address />
          <Text style={style.transport_heading}>Transport Checklist</Text>
          <View>
            <CustomHeader text="Details" />
            <Text>Here Input Fields</Text>
          </View>

          <CustomHeader text="Order Details" />
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            //   validationSchema={validationSchema}
            onSubmit={async (values, {resetForm}) => {}}>
            {({handleSubmit, values, setFieldValue}) => (
              <View>
                <View style={style.transPortForm}>
                  <RadioGroupButton options={transPortHeading} />
                </View>
                  <CustomHeader text="3. Next Day Allocation" />
                <View style={style.transPortForm}>
                  <RadioGroupButton options={transPortHeading1} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  transport_heading: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 30,
  },
  transPortForm: {
    marginLeft: 15,
    marginBottom:5
  },
});
