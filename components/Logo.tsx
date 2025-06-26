import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export function Logo({ size = 'medium', color = '#007AFF' }: LogoProps) {
  const sizeMap = {
    small: { container: 40, icon: 24, text: 12 },
    medium: { container: 60, icon: 36, text: 16 },
    large: { container: 80, icon: 48, text: 20 }
  };

  const { container, icon, text } = sizeMap[size];

  return (
    <View style={[styles.container, { width: container, height: container }]}>
      <View style={[styles.icon, { width: icon, height: icon, backgroundColor: color }]}>
        <Text style={[styles.iconText, { fontSize: icon * 0.4, color: 'white' }]}>U</Text>
      </View>
      <Text style={[styles.text, { fontSize: text, color }]}>UniExplorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  iconText: {
    fontWeight: 'bold',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
}); 