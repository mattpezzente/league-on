import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import style from '../styles/main.js'
// Custom JS Functions
import { normalizeText } from '../js/tools.js'
// Images
import socialFacebook from '../assets/social-facebook.png'
import socialTwitter from '../assets/social-twitter.png'
import socialGoogle from '../assets/social-google.png'
import socialYouTube from '../assets/social-youtube.png'
import socialTwitch from '../assets/social-twitch.png'

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
        <View key={i} style={style.profileDetailsItem}>
          <Text style={style.profileDetailsTitle}>{normalizeText(key)}</Text>
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
  let availability = [
    'na',
    'na',
    'na',
    'na',
    'na',
    'na',
    'na'
  ]
  for (let i = 0; i < props.availability.length; i++) {
    switch(props.availability[i]) {
      case 'Sun':
        availability[0] = 'Sun'
        break
      case 'Mon':
        availability[1] = 'Mon'
        break
      case 'Tue':
        availability[2] = 'Tue'
        break
      case 'Wed':
        availability[3] = 'Wed'
        break
      case 'Thu':
        availability[4] = 'Thu'
        break
      case 'Fri':
        availability[5] = 'Fri'
        break
      case 'Sat':
        availability[6] = 'Sat'
        break
    }
  }
  if (availability[0] == 'Sun') {
    availability[0] = (
      <View key={1} style={style.profileAvailabilityDaysFilled}>
        <Text style={style.profileAvailabilityDaysTextFilled}>S</Text>
      </View>
    )
  }
  else {
    availability[0] = (
      <View key={1} style={style.profileAvailabilityDays}>
        <Text style={style.profileAvailabilityDaysText}>S</Text>
      </View>
    )
  }

  if (availability[1] == 'Mon') {
    availability[1] = (
      <View key={2} style={style.profileAvailabilityDaysFilled}>
        <Text style={style.profileAvailabilityDaysTextFilled}>M</Text>
      </View>
    )
  }
  else {
    availability[1] = (
      <View key={2} style={style.profileAvailabilityDays}>
        <Text style={style.profileAvailabilityDaysText}>M</Text>
      </View>
    )
  }

  if (availability[2] == 'Tue') {
    availability[2] = (
      <View key={3} style={style.profileAvailabilityDaysFilled}>
        <Text style={style.profileAvailabilityDaysTextFilled}>T</Text>
      </View>
    )
  }
  else {
    availability[2] = (
      <View key={3} style={style.profileAvailabilityDays}>
        <Text style={style.profileAvailabilityDaysText}>T</Text>
      </View>
    )
  }

  if (availability[3] == 'Wed') {
    availability[3] = (
      <View key={4} style={style.profileAvailabilityDaysFilled}>
        <Text style={style.profileAvailabilityDaysTextFilled}>W</Text>
      </View>
    )
  }
  else {
    availability[3] = (
      <View key={4} style={style.profileAvailabilityDays}>
        <Text style={style.profileAvailabilityDaysText}>W</Text>
      </View>
    )
  }

  if (availability[4] == 'Thu') {
    availability[4] = (
      <View key={5} style={style.profileAvailabilityDaysFilled}>
        <Text style={style.profileAvailabilityDaysTextFilled}>T</Text>
      </View>
    )
  }
  else {
    availability[4] = (
      <View key={5} style={style.profileAvailabilityDays}>
        <Text style={style.profileAvailabilityDaysText}>T</Text>
      </View>
    )
  }

  if (availability[5] == 'Fri') {
    availability[5] = (
      <View key={6} style={style.profileAvailabilityDaysFilled}>
        <Text style={style.profileAvailabilityDaysTextFilled}>F</Text>
      </View>
    )
  }
  else {
    availability[5] = (
      <View key={6} style={style.profileAvailabilityDays}>
        <Text style={style.profileAvailabilityDaysText}>F</Text>
      </View>
    )
  }

  if (availability[6] == 'Sat') {
    availability[6] = (
      <View key={7} style={style.profileAvailabilityDaysFilled}>
        <Text style={style.profileAvailabilityDaysTextFilled}>S</Text>
      </View>
    )
  }
  else {
    availability[6] = (
      <View key={7} style={style.profileAvailabilityDays}>
        <Text style={style.profileAvailabilityDaysText}>S</Text>
      </View>
    )
  }
  return (
    <View>
      <Text style={style.profileSectionTitle}>Availability</Text>
      <View style={style.flexCenter}>
        {availability}
      </View>
    </View>
  )
}

export const ProfileSocial = (props) => {
  let social = ''
  if (props.social) {
    social = props.social.map((social, i) => {
      let key = ''
      let socImg = ''
      for(key in social)
      switch(key) {
        case 'facebook':
          socImg = socialFacebook
          break
        case 'twitter':
          socImg = socialTwitter
          break
        case 'google':
          socImg = socialGoogle
          break
        case 'youtube':
          socImg = socialYouTube
          break
        case 'twitch':
          socImg = socialTwitch
          break
      }
      return (
        <TouchableHighlight key={i} style={style.profileSocialItem}>
          <Image source={socImg} />
        </TouchableHighlight>
      )
    })
  }
  return (
    <View>
      <Text style={style.profileSectionTitle}>Social</Text>
      <View style={style.flexCenter}>
        {social}
      </View>
    </View>
  )
}