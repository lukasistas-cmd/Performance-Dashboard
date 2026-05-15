import React, { useState } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LogOut, Settings, TrendingUp, Users, Target, Briefcase } from 'lucide-react';

// Dummy-Daten
const initialData = {
  customers: [
    {
      id: 1,
      name: 'Kunde 1 - Webdesign',
      email: 'kunde1@example.com',
      password: 'pass123',
      services: {
        webdesign: { visitors: 1250, conversions: 45, budget: 500 },
        marketing: { visitors: 0, conversions: 0, budget: 0 },
        recruiting: { visitors: 0, conversions: 0, budget: 0 }
      },
      weeklyData: [
        { week: 'Woche 1', visitors: 800, conversions: 25, budget: 300 },
        { week: 'Woche 2', visitors: 950, conversions: 32, budget: 400 },
        { week: 'Woche 3', visitors: 1100, conversions: 40, budget: 450 },
        { week: 'Woche 4', visitors: 1250, conversions: 45, budget: 500 }
      ]
    },
    {
      id: 2,
      name: 'Kunde 2 - Marketing',
      email: 'kunde2@example.com',
      password: 'pass123',
      services: {
        webdesign: { visitors: 0, conversions: 0, budget: 0 },
        marketing: { visitors: 3200, conversions: 156, budget: 1200 },
        recruiting: { visitors: 0, conversions: 0, budget: 0 }
      },
      weeklyData: [
        { week: 'Woche 1', visitors: 2400, conversions: 100, budget: 800 },
        { week: 'Woche 2', visitors: 2800, conversions: 130, budget: 1000 },
        { week: 'Woche 3', visitors: 3000, conversions: 145, budget: 1150 },
        { week: 'Woche 4', visitors: 3200, conversions: 156, budget: 1200 }
      ]
    },
    {
      id: 3,
      name: 'Kunde 3 - Multi Service',
      email: 'kunde3@example.com',
      password: 'pass123',
      services: {
        webdesign: { visitors: 2100, conversions: 78, budget: 800 },
        marketing: { visitors: 1500, conversions: 95, budget: 600 },
        recruiting: { visitors: 320, conversions: 12, budget: 150 }
      },
      weeklyData: [
        { week: 'Woche 1', visitors: 3200, conversions: 140, budget: 1200 },
        { week: 'Woche 2', visitors: 3600, conversions: 165, budget: 1350 },
        { week: 'Woche 3', visitors: 3850, conversions: 180, budget: 1450 },
        { week: 'Woche 4', visitors: 3920, conversions: 185, budget: 1550 }
      ]
    },
    {
      id: 4,
      name: 'Kunde 4 - Test',
      email: 'kunde4@example.com',
      password: 'pass123',
      services: {
        webdesign: { visitors: 0, conversions: 0, budget: 0 },
        marketing: { visitors: 0, conversions: 0, budget: 0 },
        recruiting: { visitors: 0, conversions: 0, budget: 0 }
      },
      weeklyData: [
        { week: 'Woche 1', visitors: 0, conversions: 0, budget: 0 },
        { week: 'Woche 2', visitors: 0, conversions: 0, budget: 0 },
        { week: 'Woche 3', visitors: 0, conversions: 0, budget: 0 },
        { week: 'Woche 4', visitors: 0, conversions: 0, budget: 0 }
      ]
    }
  ]
};

const serviceInfo = {
  webdesign: { icon: Briefcase, label: 'Webdesign', color: '#1e40af' },
  marketing: { icon: Target, label: 'Marketing', color: '#059669' },
  recruiting: { icon: Users, label: 'Recruiting', color: '#7c3aed' }
};

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    if (isAdmin) {
      if (email === 'admin@dashboard.com' && password === 'admin123') {
        onLogin({ role: 'admin' });
        setError('');
      } else {
        setError('Admin-Daten falsch!');
      }
    } else {
      const customer = initialData.customers.find(c => c.email === email && c.password === password);
      if (customer) {
        onLogin({ role: 'customer', customerId: customer.id, customerName: customer.name });
        setError('');
      } else {
        setError('E-Mail oder Passwort falsch!');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-br from-teal-600 to-slate-700 p-3 rounded-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">Dashboard</h1>
        <p className="text-center text-slate-600 mb-8">Performance Dashboard für deine Kunden</p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isAdmin ? 'admin@dashboard.com' : 'kunde@example.com'}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(p) => setPassword(p.target.value)}
              placeholder={isAdmin ? 'admin123' : 'pass123'}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
        </div>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-teal-600 to-slate-700 text-white py-2 rounded-lg font-semibold mb-4 hover:opacity-90 transition"
        >
          Anmelden
        </button>

        <button
          onClick={() => { setIsAdmin(!isAdmin); setError(''); }}
          className="w-full text-slate-600 text-sm py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition"
        >
          {isAdmin ? 'Als Kunde anmelden' : 'Als Admin anmelden'}
        </button>

        <div className="mt-6 p-4 bg-slate-100 rounded-lg text-xs text-slate-600 space-y-2">
          <p className="font-semibold">Test-Logins:</p>
          <p><strong>Admin:</strong> admin@dashboard.com / admin123</p>
          <p><strong>Kunde:</strong> kunde1@example.com / pass123</p>
        </div>
      </div>
    </div>
  );
}

function CustomerDashboard({ customer, onLogout }) {
  const totalVisitors = Object.values(customer.services).reduce((sum, s) => sum + s.visitors, 0);
  const totalConversions = Object.values(customer.services).reduce((sum, s) => sum + s.conversions, 0);
  const totalBudget = Object.values(customer.services).reduce((sum, s) => sum + s.budget, 0);

  const serviceDistribution = Object.entries(customer.services).map(([key, data]) => ({
    name: serviceInfo[key].label,
    value: data.visitors || 0,
    color: serviceInfo[key].color
  })).filter(s => s.value > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
      <div className="bg-gradient-to-r from-slate-900 via-teal-900 to-slate-800 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Performance Dashboard</h1>
            <p className="text-teal-200">{customer.name}</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
            Abmelden
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KPICard icon={TrendingUp} label="Besucher" value={totalVisitors} unit="Monat" color="from-blue-600 to-blue-400" />
          <KPICard icon={Target} label="Conversions" value={totalConversions} unit="Monat" color="from-teal-600 to-teal-400" />
          <KPICard icon={Briefcase} label="Budget" value={`€${totalBudget}`} unit="Monat" color="from-purple-600 to-purple-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Entwicklung über Zeit</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={customer.weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={2} name="Besucher" />
                <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} name="Conversions" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {serviceDistribution.length > 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Service-Verteilung</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={serviceDistribution} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={100} fill="#8884d8" dataKey="value">
                    {serviceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
              <p className="text-slate-500 text-center">Noch keine Daten vorhanden. Bald geht's los! 📊</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Service-Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(customer.services).map(([key, data]) => {
              const Icon = serviceInfo[key].icon;
              const hasData = data.visitors > 0 || data.conversions > 0 || data.budget > 0;
              
              return (
                <div key={key} className={`p-4 rounded-lg border-2 ${hasData ? 'border-teal-200 bg-teal-50' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5" style={{ color: serviceInfo[key].color }} />
                    <h3 className="font-semibold text-slate-900">{serviceInfo[key].label}</h3>
                  </div>
                  {hasData ? (
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-700"><span className="font-medium">Besucher:</span> {data.visitors}</p>
                      <p className="text-slate-700"><span className="font-medium">Conversions:</span> {data.conversions}</p>
                      <p className="text-slate-700"><span className="font-medium">Budget:</span> €{data.budget}</p>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-sm italic">Noch keine Daten. Interessiert? Frag nach! 👋</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminPanel({ onLogout }) {
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formData, setFormData] = useState({});
  const [customers, setCustomers] = useState(initialData.customers);

  const handleEditClick = (customer) => {
    setEditingCustomer(customer.id);
    setFormData({ ...customer.services });
  };

  const handleSave = (customerId) => {
    setCustomers(customers.map(c => 
      c.id === customerId 
        ? { ...c, services: formData }
        : c
    ));
    setEditingCustomer(null);
  };

  const handleChange = (service, field, value) => {
    setFormData({
      ...formData,
      [service]: {
        ...formData[service],
        [field]: parseInt(value) || 0
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
      <div className="bg-gradient-to-r from-slate-900 via-teal-900 to-slate-800 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Settings className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
              <p className="text-teal-200">Verwalte Kundendaten</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
            Abmelden
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-6">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">{customer.name}</h2>
              
              {editingCustomer === customer.id ? (
                <div className="space-y-4">
                  {Object.entries(customer.services).map(([key, data]) => (
                    <div key={key} className="border-l-4 border-teal-600 pl-4 py-2">
                      <h3 className="font-semibold text-slate-900 mb-3">{serviceInfo[key].label}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Besucher</label>
                          <input
                            type="number"
                            value={formData[key]?.visitors || 0}
                            onChange={(e) => handleChange(key, 'visitors', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Conversions</label>
                          <input
                            type="number"
                            value={formData[key]?.conversions || 0}
                            onChange={(e) => handleChange(key, 'conversions', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Budget (€)</label>
                          <input
                            type="number"
                            value={formData[key]?.budget || 0}
                            onChange={(e) => handleChange(key, 'budget', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-2 mt-6">
                    <button
                      onClick={() => handleSave(customer.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                    >
                      Speichern
                    </button>
                    <button
                      onClick={() => setEditingCustomer(null)}
                      className="bg-slate-300 hover:bg-slate-400 text-slate-900 px-6 py-2 rounded-lg font-semibold transition"
                    >
                      Abbrechen
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {Object.entries(customer.services).map(([key, data]) => (
                      <div key={key} className="p-3 bg-slate-50 rounded-lg">
                        <p className="text-sm font-medium text-slate-700">{serviceInfo[key].label}</p>
                        <p className="text-xs text-slate-600 mt-1">Besucher: {data.visitors} | Conversions: {data.conversions} | Budget: €{data.budget}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleEditClick(customer)}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                  >
                    Bearbeiten
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KPICard({ icon: Icon, label, value, unit, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} text-white rounded-xl shadow-lg p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90 mb-2">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-xs opacity-75 mt-2">{unit}</p>
        </div>
        <Icon className="w-12 h-12 opacity-20" />
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (user.role === 'admin') {
    return <AdminPanel onLogout={handleLogout} />;
  }

  const customer = initialData.customers.find(c => c.id === user.customerId);

  return customer ? (
    <CustomerDashboard customer={customer} onLogout={handleLogout} />
  ) : null;
}
