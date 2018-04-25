import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import style from '../styles/main.js'
// Images
import socialFacebook from '../assets/social-facebook.png'
import socialTwitter from '../assets/social-twitter.png'
import socialGoogle from '../assets/social-google.png'
import socialYouTube from '../assets/social-youtube.png'
import socialTwitch from '../assets/social-twitch.png'

String.prototype.normalizeText = function() {
  let newText = this
  for(let i = 0; i < newText.length; i++) {
    if (i == 1 && newText.charAt(i) !== newText.charAt(i).toUpperCase()) {
      newText = newText.slice(0,1).toUpperCase() + newText.slice(1, newText.length)
    }
    if (i > 1 && newText.charAt(i) == newText.charAt(i).toUpperCase()) {
      newText = newText.slice(0, i) + ' ' + newText.slice(i)
      i++
    }
  }
  return newText
}

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
          <Text style={style.profileDetailsTitle}>{key.normalizeText()}</Text>
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