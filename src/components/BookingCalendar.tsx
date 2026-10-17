import React, { useState, useMemo } from 'react';
import { KodiakBearIcon } from './KodiakLogo';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  Globe,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  CalendarPlus,
  Sparkles,
} from 'lucide-react';

interface BookingCalendarProps {
  className?: string;
  onBookingComplete?: (booking: BookingDetails) => void;
}

export interface BookingDetails {
  date: Date;
  timeSlot: string;
  timezone: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  notes?: string;
}

const TIME_ZONES = [
  { value: 'America/New_York', label: 'GMT-04:00 America/New_York (EDT)' },
  { value: 'America/Toronto', label: 'GMT-04:00 America/Toronto (EDT)' },
  { value: 'America/Chicago', label: 'GMT-05:00 America/Chicago (CDT)' },
  { value: 'America/Denver', label: 'GMT-06:00 America/Denver (MDT)' },
  { value: 'America/Los_Angeles', label: 'GMT-07:00 America/Los_Angeles (PDT)' },
  { value: 'America/Anchorage', label: 'GMT-08:00 America/Anchorage (AKDT)' },
  { value: 'Pacific/Honolulu', label: 'GMT-10:00 Pacific/Honolulu (HST)' },
];

const DEFAULT_TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const BookingCalendar: React.FC<BookingCalendarProps> = ({
  className = '',
  onBookingComplete,
}) => {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Calendar view state (year & month)
  const [currentYear, setCurrentYear] = useState<number>(() => today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(() => today.getMonth());

  // Booking selection state
  const [selectedDate, setSelectedDate] = useState<Date>(() => today);
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [selectedTimezone, setSelectedTimezone] = useState<string>(() => {
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const match = TIME_ZONES.find((tz) => tz.value === detected);
    return match ? match.value : 'America/New_York';
  });

  // Flow step: 1 = Date & Time, 2 = Attendee Info, 3 = Confirmed
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Window Coverings (Blinds & Shades)',
    notes: '',
  });

  // Calculate calendar grid days
  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const cells: Array<{
      dayNumber: number | null;
      date: Date | null;
      isPast: boolean;
      isSelected: boolean;
      isToday: boolean;
    }> = [];

    // Empty cells before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
      cells.push({
        dayNumber: null,
        date: null,
        isPast: false,
        isSelected: false,
        isToday: false,
      });
    }

    // Days of the month
    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(currentYear, currentMonth, d);
      cellDate.setHours(0, 0, 0, 0);

      const isPast = cellDate.getTime() < today.getTime();
      const isSelected =
        selectedDate.getFullYear() === currentYear &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getDate() === d;
      const isToday = cellDate.getTime() === today.getTime();

      cells.push({
        dayNumber: d,
        date: cellDate,
        isPast,
        isSelected,
        isToday,
      });
    }

    return cells;
  }, [currentYear, currentMonth, selectedDate, today]);

  const isCurrentMonthView =
    currentYear === today.getFullYear() && currentMonth === today.getMonth();

  const handlePrevMonth = () => {
    if (isCurrentMonthView) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setStep(2);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingDetails: BookingDetails = {
      date: selectedDate,
      timeSlot: selectedTime,
      timezone: selectedTimezone,
      ...formData,
    };
    if (onBookingComplete) {
      onBookingComplete(bookingDetails);
    }
    setStep(3);
  };

  // Date formatting helpers
  const formattedSelectedDate = useMemo(() => {
    return selectedDate.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }, [selectedDate]);

  const fullFormattedDateTime = useMemo(() => {
    return `${selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })} at ${selectedTime}`;
  }, [selectedDate, selectedTime]);

  // Google Calendar URL generator
  const googleCalendarUrl = useMemo(() => {
    const title = encodeURIComponent('Lead Kodiak Strategy Consultation');
    const details = encodeURIComponent(
      `Discovery Consultation with Lead Kodiak.\nCompany: ${formData.company || 'Home Services'}\nPhone: ${formData.phone}\nNotes: ${formData.notes || 'N/A'}`
    );
    const location = encodeURIComponent('Google Meet / Direct Phone Call');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  }, [formData]);

  // Download iCal (.ics) generator
  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Lead Kodiak//Strategy Consultation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Lead Kodiak Strategy Consultation`,
      `DESCRIPTION:Discovery Call for ${formData.company || 'Contractor'} with Lead Kodiak`,
      'LOCATION:Google Meet / Direct Phone Call',
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'LeadKodiak-Consultation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetBooking = () => {
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: 'Window Coverings (Blinds & Shades)',
      notes: '',
    });
  };

  return (
    <div
      className={`glass-card rounded-3xl border-2 border-sage-300 shadow-glass overflow-hidden text-navy-900 transition-all ${className}`}
    >
      {/* =========================================================================
          STEP 3: CONFIRMATION SUCCESS VIEW
          ========================================================================= */}
      {step === 3 && (
        <div className="p-8 sm:p-14 text-center space-y-6 max-w-2xl mx-auto animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
            <CheckCircle2 size={44} />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-300/40 text-navy-900 font-mono text-xs font-semibold">
              <Sparkles size={13} className="text-cognac-600" />
              <span>CONSULTATION SCHEDULED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              You're Booked! 🎉
            </h2>
            <p className="text-navy-800/80 text-sm sm:text-base leading-relaxed">
              We have reserved your free strategy session. An email confirmation has been sent to{' '}
              <strong className="text-navy-900 font-semibold">{formData.email || 'your email'}</strong>.
            </p>
          </div>

          {/* Meeting Details Card */}
          <div className="bg-cream-200/60 rounded-2xl p-6 border border-sage-300 text-left space-y-3 font-mono text-xs sm:text-sm">
            <div className="flex items-start gap-3 text-navy-800">
              <CalendarIcon size={18} className="text-cognac-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-navy-900 block">{fullFormattedDateTime}</span>
                <span className="text-navy-800/70 text-xs">{selectedTimezone}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-navy-800 pt-2 border-t border-sage-300/50">
              <Clock size={18} className="text-cognac-600 shrink-0" />
              <span>30 Min Strategy & Market Analysis</span>
            </div>

            <div className="flex items-center gap-3 text-navy-800 pt-2 border-t border-sage-300/50">
              <Globe size={18} className="text-cognac-600 shrink-0" />
              <span>Google Meet / Direct Phone Call: (800) 555-LEAD</span>
            </div>
          </div>

          {/* Calendar Sync Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <CalendarPlus size={16} />
              <span>Add to Google Calendar</span>
            </a>

            <button
              type="button"
              onClick={downloadIcsFile}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-sage-300 hover:bg-cream-200/80 text-navy-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <CalendarIcon size={16} />
              <span>Download iCal / Outlook</span>
            </button>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={resetBooking}
              className="text-xs font-mono text-navy-800 hover:text-navy-900 underline transition-colors"
            >
              Schedule another session
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          STEP 2: ATTENDEE DETAILS FORM VIEW
          ========================================================================= */}
      {step === 2 && (
        <div className="p-6 sm:p-10 md:p-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            {/* Back Button & Header */}
            <div className="mb-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-navy-800 hover:text-cognac-600 transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Change Date & Time</span>
              </button>

              <span className="text-xs font-mono text-navy-800/60 uppercase">Step 2 of 2</span>
            </div>

            {/* Selected Slot Summary Badge */}
            <div className="bg-cream-200/70 rounded-2xl p-4 border border-sage-300 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cognac-500/15 text-cognac-600 flex items-center justify-center shrink-0">
                  <CalendarIcon size={20} />
                </div>
                <div>
                  <div className="font-extrabold text-navy-900 text-sm sm:text-base">
                    {fullFormattedDateTime}
                  </div>
                  <div className="text-xs text-navy-800/70 font-mono">
                    30 Min • {selectedTimezone}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-bold text-cognac-600 hover:text-cognac-500 uppercase tracking-wider underline shrink-0"
              >
                Edit
              </button>
            </div>

            <div className="border-b border-sage-300/60 pb-3 mb-6">
              <h3 className="text-2xl font-extrabold text-navy-900">
                Enter Your Details
              </h3>
              <p className="text-navy-800/80 text-xs sm:text-sm mt-1">
                Please provide your contact information so our strategy team can evaluate your service market ahead of the call.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Miller"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-100/90 border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-100/90 border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@yourcompany.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-100/90 border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-1.5">
                    Company / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Miller Custom Blinds"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-100/90 border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-1.5">
                  Your Primary Trade / Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-100/90 border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm shadow-sm"
                >
                  <option value="Window Coverings (Blinds & Shades)">
                    Window Coverings (Blinds, Shades, Shutters)
                  </option>
                  <option value="Roofing & Siding">Roofing & Siding</option>
                  <option value="HVAC & Plumbing">HVAC & Plumbing</option>
                  <option value="General Remodeling / Contracting">
                    General Remodeling / Contracting
                  </option>
                  <option value="Flooring & Tile">Flooring & Tile</option>
                  <option value="Other Home Services">Other Home Services</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-1.5">
                  Primary Goal or Current Bottleneck (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Knocking doors in winter, need automated Facebook/Google lead pipeline and speed-to-lead follow-ups."
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-100/90 border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm shadow-sm"
                />
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl border border-sage-300 text-navy-800 font-semibold text-xs hover:bg-cream-200/80 transition-all"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="flex-1 px-8 py-3.5 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-cognac-glow active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Free Consultation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          STEP 1: 3-COLUMN CALENDAR & TIME SLOTS VIEW (Matches the Reference Image)
          ========================================================================= */}
      {step === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-sage-300/60">
          {/* ---------------------------------------------------------------------
              LEFT COLUMN: Meeting Overview & Brand Profile
              --------------------------------------------------------------------- */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-cream-200/30">
            <div className="space-y-5">
              {/* Circular Brand Emblem */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cream-200 border-2 border-sage-300 flex items-center justify-center p-3 shadow-sm">
                <KodiakBearIcon size={44} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight leading-snug">
                  Schedule Your Free Consultation
                </h3>
                <p className="text-navy-800/80 text-xs sm:text-sm mt-1 leading-relaxed">
                  Discover how our automated pipelines and centralized mobile inbox keep your business booked year-round.
                </p>
              </div>

              {/* Consultation Metadata */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-navy-800">
                <div className="flex items-center gap-2.5">
                  <Clock size={16} className="text-cognac-600 shrink-0" />
                  <span className="font-semibold">30 min discovery call</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <CalendarIcon size={16} className="text-cognac-600 shrink-0" />
                  <span className="font-bold text-navy-900">{formattedSelectedDate}</span>
                </div>
              </div>
            </div>

            {/* Bottom helper reassurance */}
            <div className="pt-6 border-t border-sage-300/50 space-y-2">
              <p className="text-xs text-navy-800/70 leading-relaxed">
                Contact us if no available time slots work for you.
              </p>
              <a
                href="tel:18005550199"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cognac-600 hover:text-cognac-500 transition-colors"
              >
                <PhoneCall size={13} />
                <span>Call Us: (800) 555-LEAD</span>
              </a>
            </div>
          </div>

          {/* ---------------------------------------------------------------------
              CENTER COLUMN: Interactive Month Calendar & Timezone
              --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-bold text-base text-navy-900">
                  Select Date & Time
                </h4>

                {/* Month Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    disabled={isCurrentMonthView}
                    className="w-8 h-8 rounded-full border border-sage-300 flex items-center justify-center text-navy-900 hover:bg-cream-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <span className="text-sm font-extrabold text-navy-900 font-mono min-w-[120px] text-center">
                    {MONTH_NAMES[currentMonth]} {currentYear}
                  </span>

                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="w-8 h-8 rounded-full border border-sage-300 flex items-center justify-center text-navy-900 hover:bg-cream-200 transition-colors"
                    aria-label="Next month"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Day of Week Headers */}
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {DAY_NAMES.map((day) => (
                  <div
                    key={day}
                    className="text-[11px] font-mono font-bold uppercase tracking-wider text-navy-800/60 py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days Grid */}
              <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center">
                {calendarDays.map((cell, idx) => {
                  if (cell.dayNumber === null) {
                    return <div key={`empty-${idx}`} className="h-9 sm:h-10" />;
                  }

                  if (cell.isPast) {
                    return (
                      <div
                        key={`day-${cell.dayNumber}`}
                        className="h-9 sm:h-10 flex items-center justify-center text-xs text-navy-800/25 pointer-events-none select-none font-medium"
                      >
                        {cell.dayNumber}
                      </div>
                    );
                  }

                  return (
                    <button
                      key={`day-${cell.dayNumber}`}
                      type="button"
                      onClick={() => cell.date && handleDateClick(cell.date)}
                      className={`h-9 w-9 sm:h-10 sm:w-10 mx-auto rounded-full flex flex-col items-center justify-center text-xs sm:text-sm font-semibold transition-all relative ${
                        cell.isSelected
                          ? 'bg-cognac-500 text-white font-bold shadow-md scale-105 ring-2 ring-cognac-500/30'
                          : 'border border-sage-300/80 bg-sage-300/20 text-navy-900 hover:bg-cognac-500/20 hover:border-cognac-500 hover:text-navy-900'
                      }`}
                    >
                      <span>{cell.dayNumber}</span>
                      {cell.isToday && !cell.isSelected && (
                        <span className="w-1 h-1 rounded-full bg-cognac-600 absolute bottom-1"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timezone Selector */}
            <div className="pt-4 border-t border-sage-300/50">
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-navy-800/70 mb-1.5 flex items-center gap-1.5">
                <Globe size={13} className="text-cognac-600" />
                <span>Time zone</span>
              </label>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-cream-100/90 border border-sage-300 text-xs font-mono text-navy-900 focus:outline-none focus:ring-2 focus:ring-cognac-500"
              >
                {TIME_ZONES.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ---------------------------------------------------------------------
              RIGHT COLUMN: Time Slot Selector
              --------------------------------------------------------------------- */}
          <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-4 bg-cream-200/20">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-cognac-600 mb-3">
                Available Times
              </div>

              {/* Time Slots List */}
              <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
                {DEFAULT_TIME_SLOTS.map((slot) => {
                  const isSlotActive = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => handleTimeClick(slot)}
                      className={`w-full py-3 px-4 rounded-xl border text-sm font-mono font-semibold transition-all flex items-center justify-center shadow-sm active:scale-98 ${
                        isSlotActive
                          ? 'border-cognac-500 bg-cognac-500 text-white shadow-md'
                          : 'border-sage-300 hover:border-cognac-500 text-navy-900 bg-cream-100/60 hover:bg-cream-200/90 hover:text-navy-900'
                      }`}
                    >
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] font-mono text-navy-800/60">
                Click a time to continue &rarr;
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
