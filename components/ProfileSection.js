import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import style from '../styles/main.js'

export const ProfileAbout = (props) => {
  return (
    <View>
      <Text style={style.profileSectionTitle}>About</Text>
      <View style={style.container}>
        <Text style={style.textMD}>{props.about}</Text>
      </View>
    </View>
  )
}

export const ProfileDetails = (props) => {
  let details = ''
  if (props.details) {
    details = props.details.map((detail, i) => {
      let key
      for(key in detail)
      return (
        <View style={style.profileDetailsItem}>
          <Text style={style.profileDetailsTitle}>{key}</Text>
          <Text style={style.profileDetailsText}>{detail[key]}</Text>
        </View>
      )
    })
  }
  return (
    <View>
      <Text style={style.profileSectionTitle}>Details</Text>
      <View style={style.profileDetailsContainer}>
        {details}
      </View>
    </View>
  )
}

export const ProfileAvailability = (props) => {
  return (
    <View>
      <Text style={style.profileSectionTitle}>Availability</Text>
      <View style={style.flexCenter}>
        <View style={style.profileAvailabilityDays}>
          <Text style={style.profileAvailabilityDaysText}>S</Text>
        </View>
        <View style={style.profileAvailabilityDays}>
          <Text style={style.profileAvailabilityDaysText}>M</Text>
        </View>
        <View style={style.profileAvailabilityDays}>
          <Text style={style.profileAvailabilityDaysText}>T</Text>
        </View>
        <View style={style.profileAvailabilityDaysFilled}>
          <Text style={style.profileAvailabilityDaysTextFilled}>W</Text>
        </View>
        <View style={style.profileAvailabilityDays}>
          <Text style={style.profileAvailabilityDaysText}>T</Text>
        </View>
        <View style={style.profileAvailabilityDays}>
          <Text style={style.profileAvailabilityDaysText}>F</Text>
        </View>
        <View style={style.profileAvailabilityDays}>
          <Text style={style.profileAvailabilityDaysText}>S</Text>
        </View>
      </View>
    </View>
  )
}

export const ProfileSocial = (props) => {
  return (
    <View>
      <Text style={style.profileSectionTitle}>Social</Text>
      <View style={style.container}>
      </View>
    </View>
  )
}