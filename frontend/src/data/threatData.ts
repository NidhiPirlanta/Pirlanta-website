export type AttackType =
  | 'Malware'
  | 'Phishing'
  | 'Exploit'
  | 'Botnet'
  | 'Ransomware'
  | 'DDoS'

export type Severity = 'Low' | 'Medium' | 'High' | 'Critical'

export type CountryNode = {
  id: string
  name: string
  region: string
  lat: number
  lon: number
}

export type Attack = {
  id: string
  source_country: string
  target_country: string
  source_ip: string
  target_ip: string
  attack_type: AttackType
  severity: Severity
  timestamp: string
}

export const attackTypeColors: Record<AttackType, string> = {
  Malware: '#ff3b30',
  Phishing: '#ff9500',
  Exploit: '#9b5cff',
  Botnet: '#36a3ff',
  Ransomware: '#ff2d55',
  DDoS: '#38ef7d',
}

export const countries: CountryNode[] = [
  { id: 'usa', name: 'United States', region: 'California', lat: 37.77, lon: -122.41 },
  { id: 'brazil', name: 'Brazil', region: 'Sao Paulo', lat: -23.55, lon: -46.63 },
  { id: 'uk', name: 'United Kingdom', region: 'London', lat: 51.5, lon: -0.12 },
  { id: 'germany', name: 'Germany', region: 'Frankfurt', lat: 50.11, lon: 8.68 },
  { id: 'uae', name: 'UAE', region: 'Dubai', lat: 25.2, lon: 55.27 },
  { id: 'india', name: 'India', region: 'Mumbai', lat: 19.07, lon: 72.87 },
  { id: 'singapore', name: 'Singapore', region: 'Singapore', lat: 1.29, lon: 103.85 },
  { id: 'japan', name: 'Japan', region: 'Tokyo', lat: 35.67, lon: 139.65 },
  { id: 'australia', name: 'Australia', region: 'Sydney', lat: -33.86, lon: 151.21 },
]

const attackTypes: AttackType[] = [
  'Malware',
  'Phishing',
  'Exploit',
  'Botnet',
  'Ransomware',
  'DDoS',
]

const severities: Severity[] = ['Low', 'Medium', 'High', 'Critical']

const sourceIps = [
  '185.44.32.18',
  '34.210.18.77',
  '201.55.32.199',
  '52.192.45.11',
  '103.88.220.9',
  '92.31.12.6',
]

const targetIps = [
  '103.45.22.10',
  '145.12.98.76',
  '104.22.18.42',
  '18.139.77.21',
  '172.67.45.87',
  '54.248.92.13',
]

const randomItem = <T,>(items: T[]) =>
  items[Math.floor(Math.random() * items.length)]

const generateId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `atk-${Math.random().toString(16).slice(2)}`

export const formatTimestampUTC = (date = new Date()) =>
  `${date.toISOString().replace('T', ' ').slice(0, 19)} UTC`

export const makeRandomAttack = (): Attack => {
  const source = randomItem(countries)
  const target = randomItem(countries.filter((country) => country.id !== source.id))

  return {
    id: generateId(),
    source_country: source.name,
    target_country: target.name,
    source_ip: randomItem(sourceIps),
    target_ip: randomItem(targetIps),
    attack_type: randomItem(attackTypes),
    severity: randomItem(severities),
    timestamp: formatTimestampUTC(new Date()),
  }
}

export const seedAttacks: Attack[] = Array.from({ length: 6 }, () =>
  makeRandomAttack()
)

